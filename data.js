const kindergartens = [
    {
        name: "Yunus Emre Anaokulu",
        lat: 38.45453194,
        lng: 27.11085367,
        address: "https://maps.app.goo.gl/k6V12Fm8Sw1UUVs68",
        phone: "0212 533 43 78",
        teacherQuality: 4,
        hygiene: 4,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 4.2,
        googleMapsScore: 4.7
    },
    {
        name: "Masal Treni Anaokulu",
        lat: 41.02439602,
        lng: 28.94366498,
        address: "https://maps.app.goo.gl/7rGW19ux5EwxmkJ38",
        phone: "0535 943 28 60",
        teacherQuality: 1,
        hygiene: 2,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 1,
        generalScore: 1.8,
        googleMapsScore: 3
    },
    {
        name: "Çakıltaşı Anaokulu",
        lat: 38.45454162,
        lng: 27.11084803,
        address: "https://maps.app.goo.gl/bk1Cmvhpm8dMWiiK7",
        phone: "0212 589 17 25",
        teacherQuality: 5,
        hygiene: 3,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 3.8,
        googleMapsScore: 4.7
    },
    {
        name: "Gönül Bahçesi Anaokulu",
        lat: 41.02816197,
        lng: 28.9379032,
        address: "https://maps.app.goo.gl/YctWgHcESgkjFxn28",
        phone: "0212 533 37 37",
        teacherQuality: 4,
        hygiene: 4,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 4.3,
        googleMapsScore: 4.6
    },
    {
        name: "Merkez Gülleri Anaokulu",
        lat: 41.01378857,
        lng: 28.92283809,
        address: "https://maps.app.goo.gl/2w4LJScv8pmAkib79",
        phone: "0530 498 34 98",
        teacherQuality: 2,
        hygiene: 2,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 3,
        generalScore: 2.5,
        googleMapsScore: 5
    },
    {
        name: "İrfan Kaşifler Anaokulu",
        lat: 41.01422445,
        lng: 28.9368667,
        address: "https://maps.app.goo.gl/LrDseX3vP7CXsn7s8",
        phone: "0532 422 27 34",
        teacherQuality: 4,
        hygiene: 3,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 2,
        generalScore: 2.9,
        googleMapsScore: 4.8
    },
    {
        name: "Kocamustafapaşa Umut Eğitim Kurumu",
        lat: 41.01657333,
        lng: 28.94283995,
        address: "https://maps.app.goo.gl/TMTG8tJTYoKWuHiX8",
        phone: "0212 534 98 00",
        teacherQuality: 2,
        hygiene: 2,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 2,
        generalScore: 2,
        googleMapsScore: 4.8
    },
    {
        name: "Topkapı Doğa Koleji Anaokulu",
        lat: 41.01989388,
        lng: 28.92964438,
        address: "https://maps.app.goo.gl/5xL2xiajX3XBvE5J7",
        phone: "0212 533 03 33",
        teacherQuality: 3,
        hygiene: 3,
        specialNeeds: "Uygun değil",
        schedule: "Yarım Gün",
        security: 3,
        generalScore: 3,
        googleMapsScore: 3.6
    },
    {
        name: "İELEV Anaokulu",
        lat: 41.01296186,
        lng: 28.97391568,
        address: "https://maps.app.goo.gl/BTGRYazMsQuRMuYQA",
        phone: "0212 512 78 87",
        teacherQuality: 4,
        hygiene: 4.5,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 5,
        generalScore: 4.5,
        googleMapsScore: 3.5
    },
    {
        name: "Fatih İlkadım Anaokulu",
        lat: 41.00951075,
        lng: 28.93217520,
        address: "https://maps.app.goo.gl/1ZutUUJxH61Unfw16",
        phone: "0544 680 50 70",
        teacherQuality: 5,
        hygiene: 5,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 4.6,
        googleMapsScore: 4.6
    },
    {
        name: "Fatih Gülistanbul Anaokulu",
        lat: 41.00132603,
        lng: 28.92908120,
        address: "https://maps.app.goo.gl/Qv6qMTXk6RykY6FL6",
        phone: "0506 543 60 36",
        teacherQuality: 5,
        hygiene: 5,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 5,
        generalScore: 4.7,
        googleMapsScore: 5
    },
    {
        name: "Sultan Fatih Koleji Anaokulu",
        lat: 41.02792351,
        lng: 28.94385232,
        address: "https://maps.app.goo.gl/WAhbA3qWYFNzYVzS9",
        phone: "0212 531 22 82",
        teacherQuality: 3.5,
        hygiene: 4,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 4.1,
        googleMapsScore: 4
    },
    {
        name: "Akasya Gece ve Gündüz Bakımevi",
        lat: 41.00905024,
        lng: 28.93419883,
        address: "https://maps.app.goo.gl/Y2SjfwbTSVPJ9L9a7",
        phone: "0212 585 85 13",
        teacherQuality: 3.5,
        hygiene: 4.5,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 3,
        generalScore: 3.9,
        googleMapsScore: 4.1
        
    },
    {
        name: "Enerji Gönül Aydınlığı Anaokulu",
        lat: 41.01644391,
        lng: 28.94831918,
        address: "https://maps.app.goo.gl/Fkmo5SZxX151jqo5A",
        phone: "0530 861 82 52",
        teacherQuality: 4,
        hygiene: 4,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 5,
        generalScore: 4.4,
        googleMapsScore: 4.5
    },
    {
        name: "Fatih Okyanus Koleji Anaokulu",
        lat: 41.02790722,
        lng: 28.93343535,
        address: "https://maps.app.goo.gl/KH6b74jCSXx2kuAc8",
        phone: "0212 521 19 99",
        teacherQuality: 2,
        hygiene: 3,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 3,
        generalScore: 2.5,
        googleMapsScore: 3.5
    },
    {
        name: "Fatih Rawdah Okulları Anaokulu",
        lat: 41.02603136,
        lng: 28.93442709,
        address: "https://maps.app.goo.gl/TEvELX5gsME8QRjQA",
        phone: "0507 152 34 61",
        teacherQuality: 3,
        hygiene: 3,
        specialNeeds: "Uygun değil",
        schedule: "Yarım Gün",
        security: 3,
        generalScore: 3,
        googleMapsScore: 3.7
    },
    {
        name: "İpekböceği Anaokulu ve Kreş",
        lat: 41.01333911,
        lng: 28.94326334,
        address: "https://maps.app.goo.gl/SFn5qWQndArkmw7b8",
        phone: "0212 631 23 11",
        teacherQuality: 4.5,
        hygiene: 4.5,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 5,
        generalScore: 4.6,
        googleMapsScore: 4.8
    },
    {
        name: "Miraç Çocuk Yuvası",
        lat: 41.02512088,
        lng: 28.95380611,
        address: "https://maps.app.goo.gl/7zyfQa8KwRkhuu6P9",
        phone: "0533 211 17 65",
        teacherQuality: 3.5,
        hygiene: 4,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 2,
        generalScore: 3.6,
        googleMapsScore: 4
    },
    {
        name: "Benekli At Anaokulu",
        lat: 41.01859369,
        lng: 28.93186901,
        address: "https://maps.app.goo.gl/J96ZB8rkEU4z7psB7",
        phone: "0212 621 52 74",
        teacherQuality: 3,
        hygiene: 4,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 3.5,
        googleMapsScore: 4.6
    },
    {
        name: "İlk Cemre Anaokulu",
        lat: 41.01834889,
        lng: 28.93107271,
        address: "https://maps.app.goo.gl/J96ZB8rkEU4z7psB7",
        phone: "0212 963 20 73",
        teacherQuality: 2,
        hygiene: 3,
        specialNeeds: "Uygun değil",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 2.4,
        googleMapsScore: 4.6
    },
    {
        name: "Fatih Sınav Koleji Anaokulu",
        lat: 41.02317675,
        lng: 28.92967970,
        address: "https://maps.app.goo.gl/rv4YtunPr9QDTsxd9",
        phone: "0212 588 44 72",
        teacherQuality: 2,
        hygiene: 3,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 3,
        generalScore: 2.2,
        googleMapsScore: 4.1
    },
    {
        name: "İpekböceği Anaokulu",
        lat: 41.01233829,
        lng: 28.94331198,
        address: "https://maps.app.goo.gl/diUP1qqMR1s2kgmT8",
        phone: "0212 631 23 11",
        teacherQuality: 5,
        hygiene: 4,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 4,
        generalScore: 4.1,
        googleMapsScore: 4.8
    },
    {
        name: "Fatih Altınbahçe Anaokulu",
        lat: 41.02802584,
        lng: 28.94525575,
        address: "https://maps.app.goo.gl/45HivnBdgozp59Dv7",
        phone: "0505 052 53 09",
        teacherQuality: 4,
        hygiene: 5,
        specialNeeds: "Uygun",
        schedule: "Tam Gün",
        security: 5,
        generalScore: 4,
        googleMapsScore: 4.8
    }
]; 