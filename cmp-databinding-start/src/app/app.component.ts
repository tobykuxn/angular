import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "Testserver", content: "Just a test!"}];

  onServerAdded(serverDate: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverDate.serverName,
      content: serverDate.serverContent
    });
  }

  onBlueprintAdded(blueprintDate: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintDate.serverName,
      content: blueprintDate.serverContent
    });
  }
}
