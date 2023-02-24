import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { GithubRepositoryOwnerType, GithubRepositoryType } from "./github.models";


@Injectable({ providedIn: 'root' })
export class GithubService {
    constructor(private http: HttpClient) { }
    async getReleases(repository: GithubRepositoryType, owner: GithubRepositoryOwnerType = 'lneninger') {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'X-GitHub-Api-Version': '2022-11-28',
              Authorization: `Bearer ${environment.githubApiToken}`
            })
          };
        const url = `${environment.githubApiUrl}repos/${owner}/${repository}/releases`;
        return await firstValueFrom(this.http.get<any[]>(url/*, httpOptions*/));
    }

    async getLatestRelease(repository: GithubRepositoryType, owner: GithubRepositoryOwnerType = 'lneninger') {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'X-GitHub-Api-Version': '2022-11-28',
              Authorization: `Bearer ${environment.githubApiToken}`
            })
          };
        const url = `${environment.githubApiUrl}repos/${owner}/${repository}/releases/latest`;
        return await firstValueFrom(this.http.get(url/*, httpOptions*/));
    }

    async getFromUrl(url: string) {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'X-GitHub-Api-Version': '2022-11-28',
              Authorization: `Bearer ${environment.githubApiToken}`
            })
          };
        return await firstValueFrom(this.http.get(url/*, httpOptions*/));
    }
}