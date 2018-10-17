Timer [ example outcome: 2day 13h 47m 54s ]
##angular 6 typescript used to create timer (2day 13h 47m 54s)

assign_match_time: any;
const countDownDate = new Date('2018-10-19T23:00:00.000Z').getTime();
    this.assign_match_time = new Observable<any>((observer: Observer<any>) => {
      const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - (now + 3600000);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        observer.next(days + 'day ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');
        if (distance < 0) {
          clearInterval(x);
          observer.next('EXPIRED');
        }
      }, 1000);
    });
