import { ConnectWallet, useAddress  } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
 // const { isLoggedIn } = useUser();

  const { contract, isLoading: contractLoading } = useContract(
    "0x25a878be056f46ab4af96e05fe96517ef1a909fa"
  );

  const { data, isLoading: ownedNFTsLoading } = useOwnedNFTs(contract, address);
  
  if(!address) {
    return <div style={{ width: 200 }}><ConnectWallet></ConnectWallet></div>
  }
  else if (contractLoading) {
    return <div>Contract Loading...</div>;
  } 
  else if (!contractLoading && ownedNFTsLoading) {
    console.log(contract);
    return <div>Contract Loaded loading owned NFTs</div>;
    
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
