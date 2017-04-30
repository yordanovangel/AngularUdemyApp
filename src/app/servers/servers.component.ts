import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server name:';
  serverCreated = true;
  servers = ['TestServer1', 'TestServer2', 'TestServer3'];
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = false;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!!! ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  logCount() {
    this.logs.push(new Date());

  }
}
