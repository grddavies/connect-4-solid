import { createEffect } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { C4Props } from "../components/ConnectFour";

const LOCAL_STORAGE_KEY = "c4-solid";
export default function createLocalStore(
  value: C4Props
): [get: Store<C4Props>, set: SetStoreFunction<C4Props>] {
  // load stored game state on init
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY),
    gamedata: C4Props = stored ? JSON.parse(stored)! : value,
    [state, setState] = createStore(gamedata);
  // JSON.stringify creates deps on every iterable field
  createEffect(() =>
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  );
  return [state, setState];
}
