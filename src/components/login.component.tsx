import { Component } from "react";
import formitFormaService from "../services/formit-forma.service";

export default class Login extends Component {
  static login(
    region
  ): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
    formitFormaService.accessSpacemaker(false, region);
    return null;
  }

  render() {
    return <></>;
  }
}
