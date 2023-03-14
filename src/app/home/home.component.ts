
import { Component, OnInit } from "@angular/core";
import { GithubService } from "src/services/github/github.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  applicationDownloadUrl: undefined | string;
  applicationDownloadFielName: undefined | string;
  applicationReleases: any[] = [];
  applicationLatestRelease: any;
  applicationLatestReleaseResources: any;
  applicationVersion: any;

  backgroundDownloadUrl: undefined | string;
  backgroundDownloadFielName: undefined | string;
  backgroundReleases: any[] = [];
  backgroundLatestRelease: any;
  backgroundLatestReleaseResources: any;
  backgroundVersion: any;

  constructor(private githubService: GithubService) { }

  async ngOnInit() {
    try {
      await this.getApplicationLatestRelease();
    } catch { }

    try {
      await this.getBackgroundLatestRelease();
    } catch { }

  }

  async getApplicationLatestRelease() {
    this.applicationReleases = await this.githubService.getReleases('irrigai-app-public');
    this.applicationLatestRelease = await this.githubService.getLatestRelease('irrigai-app-public');
    if (this.applicationLatestRelease) {
      this.applicationLatestReleaseResources = await this.githubService.getFromUrl(this.applicationLatestRelease['assets_url']);
      this.applicationDownloadUrl = this.applicationLatestReleaseResources[0]['browser_download_url'];
      this.applicationVersion = this.applicationLatestRelease['tag_name'];
      this.applicationDownloadFielName = this.applicationLatestRelease[0]['name']
    }
  }

  async getBackgroundLatestRelease() {
    this.backgroundReleases = await this.githubService.getReleases('irrigai-background-public');
    this.backgroundLatestRelease = await this.githubService.getLatestRelease('irrigai-background-public');
    if (this.backgroundLatestRelease) {
      this.backgroundLatestReleaseResources = await this.githubService.getFromUrl(this.backgroundLatestRelease['assets_url']);
      this.backgroundDownloadUrl = this.backgroundLatestReleaseResources[0]['browser_download_url'];
      this.backgroundVersion = this.backgroundLatestRelease['tag_name'];
      this.backgroundDownloadFielName = this.backgroundLatestReleaseResources[0]['name']
    }
  }
}
