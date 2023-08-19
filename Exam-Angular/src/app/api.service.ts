import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Announcement } from 'src/interfaces/announcement';
import { IPost } from 'src/interfaces/posts';
import { User } from 'src/interfaces/user';
import { IUser } from 'src/interfaces/user-id';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private announcement$$ = new BehaviorSubject<Announcement | undefined>(undefined);
  announcement$ = this.announcement$$.asObservable();

  announcement: Announcement | undefined
  

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

  updateAnnouncement(
    from: string,
    to: string,
    price: string,
    date: string,
    seats: string,
    description: string,
    id: string) {
    return this.http
      .put<Announcement>(`/api/announcements/${id}`, {
        from,
        to,
        price,
        date,
        seats,
        description,
      })
      .pipe(tap((announcement) => this.announcement$$.next(announcement)));
  }

  deleteAnnouncement(id: string) {
    return this.http.delete<Announcement>(`/api/announcements/${id}/delete`)  
  }

  // deleteAnnouncementFromUser(id: string) {
  //   return this.http.delete<User>(`/api/announcements/${id}/delete`) 
  // }

  subscribeAnnouncement(id: string){
    return this.http.put<Announcement>(`/api/announcements/${id}/subscribe`, {
      id
    })
    .pipe(tap((announcement) => this.announcement$$.next(announcement)));
  }

  loadPosts(limit?: number) {
    return this.http.get<IPost[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}
