import ContactAddress from "@/app/components/ContactUs/ContactAddress";
import ContactUsFORM from "@/app/components/ContactUs/ContactUsFORM";



export default function ContactUs({page}: {page: any}) {
  const  contactUsData  = page?.contactUsData || page;

  return (
    <>
        <ContactAddress 
          heading={contactUsData?.heading} 
          contactAddress={contactUsData?.contactAddress} 
        />
        <ContactUsFORM/>
    </>
  )
}
