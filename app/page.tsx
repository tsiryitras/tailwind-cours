import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="">
        <div className="">
          <img
            src="https://images.pexels.com/photos/15591206/pexels-photo-15591206/free-photo-of-rhume-pluie-mouille-reflet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full rounded-lg"
          />
          <span className="btn-primary">Learn more</span>
        </div>
      </section>
    </main>
  );
}
