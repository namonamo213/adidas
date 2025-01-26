import { kicks } from "../constants";
import Trialcard from "../Components/Trialcard";
import Nav from "../Components/Nav";

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Trial = () => {
  const gridChunks = chunkArray(kicks, 6);

  return (
    <section className="max-container flex flex-col gap-16">
      <div>
        <Nav></Nav>
      </div>
      <div className="top-full bg-gray-100 border-b-2 p-4 w-full mt-6">
        <div className="flex justify-center gap-6">
          <h3 className="max-w-xs text-center">
            New Styles On Sale: Up To 40% <br />
            <span className="block">Off</span>
          </h3>
          <p className="">Shop All Our new Markdowns</p>
        </div>
      </div>

      {gridChunks.map((chunk, index) => (
        <div
          key={`grid-${index}`}
          className="grid grid-cols-3 gap-6"
          style={{
            position: "relative",
            width: "75%",
            left: "20%",
          }}
        >
          {chunk.map((kick) => (
            <Trialcard key={kick.name} {...kick} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Trial;
