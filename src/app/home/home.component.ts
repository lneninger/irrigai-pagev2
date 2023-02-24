
import { Component, OnInit } from "@angular/core";
import { GithubService } from "src/services/github/github.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    applicationDownloadUrl: undefined | string;
    applicationReleases: any[] = [];
    applicationLatestRelease: any;    
    applicationLatestReleaseResources: any;
    applicationVersion: any;

    backgroundDownloadUrl: undefined | string;
    backgroundReleases: any[] = [];
    backgroundLatestRelease: any;
    backgroundLatestReleaseResources: any;
    backgroundVersion: any;

    constructor(private githubService: GithubService) { }

    async ngOnInit() {
        await this.getApplicationLatestRelease();
        await this.getBackgroundLatestRelease();
    }

    async getApplicationLatestRelease(){
        this.applicationReleases = await this.githubService.getReleases('irrigai-app-public');
        this.applicationLatestRelease = await this.githubService.getLatestRelease('irrigai-app-public');
        if (this.applicationLatestRelease) {
            this.applicationLatestReleaseResources = await this.githubService.getFromUrl(this.applicationLatestRelease['assets_url']);
            this.applicationDownloadUrl = this.applicationLatestReleaseResources[0]['browser_download_url'];
            this.applicationVersion = this.applicationLatestRelease['tag_name'];
        }
    }

    async getBackgroundLatestRelease(){
        this.backgroundReleases = await this.githubService.getReleases('irrigai-background-public');
        this.backgroundLatestRelease = await this.githubService.getLatestRelease('irrigai-background-public');
        if (this.backgroundLatestRelease) {
            this.backgroundLatestReleaseResources = await this.githubService.getFromUrl(this.backgroundLatestRelease['assets_url']);
            this.backgroundDownloadUrl = this.backgroundLatestReleaseResources[0]['browser_download_url'];
            this.backgroundVersion = this.backgroundLatestRelease['tag_name'];
        }
    }
}