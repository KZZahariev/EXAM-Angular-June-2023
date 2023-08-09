import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Announcement } from 'src/interfaces/announcement';
import { IPost } from 'src/interfaces/posts';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loadAnnouncement(id: string) {
    return this.http.get<Announcement>(`${apiUrl}/announcements/${id}`);
  }

  loadAnnouncements() {
    return this.http.get<Announcement[]>(`${apiUrl}/announcements`);
  }

  createNewAnnouncement(
    from: string,
    to: string,
    price: string,
    date: string,
    seats: string,
    description: string
  ) {
    return this.http.post<Announcement>(`/api/announcements`, {
      from,
      to,
      price,
      date,
      seats,
      description,
    });
  }

  loadPosts(limit?: number) {
    return this.http.get<IPost[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}
