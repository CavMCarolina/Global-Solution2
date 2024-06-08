import Video from "./Video/Video";
import Importancia from "./Importancia/Importancia";
import Realidade from "./Realidade/Realidade";
import NossaSolucao from "./NossaSolucao/NossaSolucao";
import ONGsHome from "./ONGsHome/ONGsHome";
import PrototipoHome from "./PrototipoHome/PrototipoHome";

export default function HomeComponente() {
  return (
    <>
      <Video />
      <Importancia/>
      <Realidade />
      <NossaSolucao/>
      <ONGsHome/>
      <PrototipoHome/>
    </>
  );
}
