import mixpanel from "mixpanel-browser";
// mixpanel.init('52d9105dc2cbd94e7b0da50a2b65f4c0');
mixpanel.init("52d9105dc2cbd94e7b0da50a2b65f4c0", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

let env_check = true;

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;
