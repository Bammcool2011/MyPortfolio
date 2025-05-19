import activitiesData from "../data/activitiesData.json";

export default function Activities() {
  return (
    <section
      className="flex flex-col gap-4 items-center"
      aria-label="Activities Section"
    >
      <h1 className="text-5xl text-white font-semibold text-center mb-4">
        ⌈ Activities ⌋
      </h1>
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-[74dvw] w-full">
        {/* Dashed vertical line for md and up */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 border-l-2 border-dashed border-zinc-400 z-10" />

        {activitiesData.map((activity, idx) => (
          <div
            key={idx}
            className="rounded-lg p-6 text-white shadow"
            tabIndex={0}
            aria-label={activity.title}
          >
            <img
              src={activity.img}
              alt={activity.title || "Activity image"}
              className="w-full h-72 object-cover rounded mb-6"
              loading="lazy"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">
              {activity.title}
            </h2>
            <h3 className="text-lg mb-2 text-center text-zinc-300">
              {activity.position}
            </h3>
            <p className="text-center">{activity.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
