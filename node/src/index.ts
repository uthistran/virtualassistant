import { Connector } from "./connector";
import Receiver from "./receiver";
import { Initializer } from "./initializer";

let connection = new Connector()
connection.connect([new Initializer(), new Receiver()]);

