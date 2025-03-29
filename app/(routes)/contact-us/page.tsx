import ContactAddress from "@/app/components/ContactUs/ContactAddress";
import ContactUsFORM from "@/app/components/ContactUs/ContactUsFORM";
import contactUsData from "@/app/data/contact-us.json";

export default function Page() {
  return (
    <main>
        <ContactAddress 
          heading={contactUsData?.heading} 
          contactAddress={contactUsData?.contactAddress} 
        />
        <ContactUsFORM/>
    </main>
  )
}
