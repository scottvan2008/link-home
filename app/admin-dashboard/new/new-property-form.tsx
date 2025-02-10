"use client";
import PropertyForm from "@/components/property-form";
import { useAuth } from "@/context/auth";
import { propertyDataSchema } from "@/validation/propertySchema";
import { PlusCircleIcon } from "lucide-react";
import { z } from "zod";
import { saveNewProperty } from "./actions";

export default function NewPropertyForm() {
    const auth = useAuth();
    const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
        const token = await auth?.currentUser?.getIdToken();

        if (!token) {
            return;
        }
        const response = await saveNewProperty({ ...data, token });
        console.log({ response });
    };

    return (
        <div>
            <PropertyForm
                handleSubmit={handleSubmit}
                submitButtonLabel={
                    <>
                        <PlusCircleIcon /> Create Property
                    </>
                }
            />
        </div>
    );
}
