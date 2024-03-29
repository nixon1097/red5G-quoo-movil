import listResultinfo from "../mocks/whit-result.json";
import noResultInfo from "../mocks/no-result.json";

export function useInfos (){
    const infos = listResultinfo.info;
    
    const mappsIfons = infos?.map((info) => ({
      id: info.id,
      title: info.title,
      messag: info.messag,
      iconUrl: info.iconUrl,
      
    }));
  
    return { infons : mappsIfons , infos }
  
  }