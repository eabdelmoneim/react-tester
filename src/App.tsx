import { ConnectWallet, useAddress  } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
 // const { isLoggedIn } = useUser();

  const { contract, isLoading: contractLoading } = useContract(
    "0x739F0A1709e1515Aa6a91abC932ceFfBe5562f7A"
  );

  const { data, isLoading: ownedNFTsLoading } = useOwnedNFTs(contract, address);
  
  if(!address) {
    return <div style={{ width: 200 }}><ConnectWallet></ConnectWallet></div>
  }
  else if (contractLoading) {
    return <div>Contract Loading...</div>;
  } //else if (!ownedNFTsLoading) {
    //return <div>Owned NFTs Loading...</div>;
 // }
  else if (!contractLoading && ownedNFTsLoading) {
    console.log(contract);
    return <div>Contract Loaded loading owned NFTs</div>;
    
    // if(data && data?.length !== 0) {
    // data?.map((item) => {
    //   console.log(item);
    //   let attributes = item.metadata.attributes as any[];
    //   for(let i=0;i<attributes.length;i++){
    //     console.log(attributes[i].value);
    //   }
    // });
  } else if (!contractLoading && !ownedNFTsLoading) {
    return <div>Everything loaded</div>;
  }
  return (
    <>
      <div style={{ width: 200 }}>
        <ConnectWallet></ConnectWallet>
      </div>
   
     
    </>
  );
}
