import { Request, Response } from "express";
import { Webhook } from "svix";
import userModel from "../models/userModel";

// Type for Clerk email object
type ClerkEmailObject = {
  id: string;
  email_address: string;
  object: string;
  linked_to: any[];
  matches_sso_connection: boolean;
  reserved: boolean;
  created_at: number;
  updated_at: number;
  verification: {
    attempts: number;
    expire_at: number;
    status: string;
    strategy: string;
  };
};

// Type for Clerk webhook event
type ClerkWebhookEvent = {
  data: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    image_url: string;
    profile_image_url: string;
    primary_email_address_id?: string;
    email_addresses?: ClerkEmailObject[];
  };
  type: string;
};

// Type for MongoDB user model
type userDataType = {
  clerkID?: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
};

// Webhook handler
const clerkWebhook = async (req: Request, res: Response) => {
  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET;
    if (!secret) throw new Error("CLERK_WEBHOOK_SECRET is not set");

    const whook = new Webhook(secret);

    // Verify and parse event
    const evt = await whook.verify(req.body, {
      "svix-id": req.headers["svix-id"] as string,
      "svix-timestamp": req.headers["svix-timestamp"] as string,
      "svix-signature": req.headers["svix-signature"] as string,
    }) as ClerkWebhookEvent;

    const { data, type } = evt;

    // Optional chaining for safety in delete event
    const emailObj = data.email_addresses?.find(
      (email) => email.id === data.primary_email_address_id
    );

    const baseUserData: userDataType = {
      email: emailObj?.email_address || "unknown@email.com",
      firstName: data.first_name || "",
      lastName: data.last_name || "",
      photo: data.image_url || data.profile_image_url || "",
    };

    switch (type) {
      case "user.created": {
        const userData: userDataType = {
          clerkID: data.id,
          ...baseUserData,
        };
        await userModel.create(userData);
        return res.status(201).json({ success: true });
      }

      case "user.updated": {
        await userModel.findOneAndUpdate({ clerkID: data.id }, baseUserData);
        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkID: data.id });
        return res.status(200).json({ success: true });
      }

      default:
        return res.status(200).json({ success: true, message: "Unhandled event type" });
    }
  } catch (error: any) {
    console.error("❌ Clerk webhook error:", error.message);
    return res.status(400).json({ success: false, error: error.message });
  }
};

export { clerkWebhook };
