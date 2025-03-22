StartupEvents.registry("block", (e) => {
  const createMachine = (id) => {
    e.create(`society:${id}`, "custommachinery");
  };
  const machines = [
    "incubator",
    "unholy_cradle",
    "biomechanical_forge",
    "masticator",
    "industrial_brewer",
    "bottler",
    "dehydrator",
    "source_terrarium",
  ];
  machines.forEach((machine) => {
    createMachine(machine);
  });
});
