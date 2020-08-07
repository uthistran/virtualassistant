import { Connector } from "./connector";
import Receiver from "./receiver";

let connection = new Connector()
connection.connect([new Receiver()]);

