1. Opis Projektu
    PatrykGotuje to interaktywna aplikacja typu SPA stworzona w bibliotece React. 
    Służy do przeglądania, wyszukiwania oraz dzielenia się przepisami kulinarnymi. 
    Projekt spelnia kryteria pełnoprawnego serwisu kulinarnego z własnym backendem i bazą danych.

2. Funkcjonalności
    Przeglądanie i Wyszukiwanie
Katalog przepisów: Wyświetlanie listy przepisów w formie responsywnej siatki (Grid) z atrakcyjnymi zdjęciami.
Zaawansowane filtrowanie: Możliwość jednoczesnego wyszukiwania po nazwie potrawy oraz filtrowania po kategorii (np. Śniadanie, Obiad, Deser).
Szczegóły przepisu: Dynamiczne podstrony dla każdego przepisu, zawierające dokładny opis przygotowania, składniki oraz autora.
    Zarządzanie Treścią
Dodawanie przepisów: Formularz umożliwiający użytkownikom dodanie własnego przepisu do bazy danych. Aplikacja automatycznie przypisuje domyślne zdjęcie, jeśli użytkownik nie posiada własnego.
Profil użytkownika: Sekcja wyświetlająca statystyki oraz listę przepisów dodanych przez aktualnego użytkownika.
    Responsywność (RWD)
Mobile First: Aplikacja jest w pełni przystosowana do urządzeń mobilnych.
Hamburger Menu: Na mniejszych ekranach nawigacja zmienia się w rozwijane menu boczne, obsługiwane intuicyjną ikoną.
3. Stack Technologiczny
Frontend (Warstwa wizualna)
React (Vite): Budowa interfejsu użytkownika w oparciu o komponenty.
React Router DOM: Obsługa routingu (nawigacja bez przeładowania strony).
CSS3: Stylowanie z wykorzystaniem CSS Grid i Flexbox. Zastosowano zmienne CSS (:root) dla spójności kolorystycznej.
React Icons: Wykorzystanie nowoczesnych ikon wektorowych (np. logo garnka).
Backend (Warstwa danych)
Node.js + Express: Własny serwer obsługujący zarówno pliki statyczne aplikacji, jak i API.
JSON-Server: Symulacja bazy danych REST API.
Custom Persistence Logic: Autorski skrypt w server.cjs, który zapewnia trwałość danych i automatyczne wypełnienie bazy (seed) przy pierwszym uruchomieniu w chmurze.

4. Architektura i Rozwiązania
    SPA (Single Page Application): Strona ładuje się tylko raz, a przejścia między widokami są natychmiastowe.
    REST API: Komunikacja z serwerem odbywa się za pomocą metod HTTP:
    GET – pobieranie listy i szczegółów przepisów.
    POST – wysyłanie nowego przepisu do bazy.
    React Hooks:
        useState – zarządzanie stanem (np. otwarte menu, wpisany tekst).
        useEffect – pobieranie danych z API przy załadowaniu komponentu.
        useParams – odczytywanie ID przepisu z adresu URL.