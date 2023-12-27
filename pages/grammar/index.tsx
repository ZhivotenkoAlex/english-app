import { useEffect, useState } from "react";
import PageContainer from "../../components/__atoms__/PageContainer/PageContainer";
import Title from "@/components/__features__/Title";

function Grammar() {
    const [location, setLocation] = useState('')

    useEffect(() => {
      setLocation(window?.location?.origin)
    }, [])
    const ogData = {
      image: `${location}/public/images/logo.png`,
      title: 'EasyWay | Grammar',
      description: 'Easy way to learn English',
      type: 'website',
      url: location,
    }


    return <PageContainer>
        <Title
        title={ogData.title}
        description={ogData.description}
        canonical={ogData.url}
        ogData={ogData}
      />
        Grammar</PageContainer>;
}

export default Grammar;
