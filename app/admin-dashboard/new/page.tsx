import { Breadcrumbs } from "@/components/ui/breadcrumb";

export default function NewProperty() {
    return (
        <div>
            <Breadcrumbs
                items={[
                    {
                        href: "/admin-dashboard",
                        label: "Dashboard",
                    },
                    {
                        label: "New Property",
                    },
                ]}
            />
        </div>
    );
}
