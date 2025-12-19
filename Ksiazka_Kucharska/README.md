1. Cel i opis projektu
Celem projektu było stworzenie responsywnej aplikacji internetowej typu Single Page Application służącej do zarządzania przepisami kulinarnymi. Aplikacja umożliwia użytkownikom przeglądanie bazy danych przepisów, wyszukiwanie konkretnych potraw oraz dodawanie własnych treści. Projekt symuluje działanie pełnego serwisu internetowego, posiadając własną warstwę wizualna oraz serwerową.

2. Zaimplementowane funkcjonalności
Aplikacja oferuje następujące możliwości:

Przeglądanie przepisów: Strona główna wyświetla listę dostępnych przepisów w formie czytelnych kart ze zdjęciami. Układ graficzny dostosowuje się automatycznie do wielkości ekranu (zastosowanie CSS Grid).
System filtrowania: Zaimplementowano hybrydowy system wyszukiwania. Użytkownik może jednocześnie wpisywać nazwę potrawy w wyszukiwarkę tekstową oraz wybierać kategorię (np. Śniadanie, Obiad). Lista wyników aktualizuje się w czasie rzeczywistym.
Szczegóły przepisu: Po kliknięciu w wybrany kafelek, aplikacja przenosi użytkownika do dynamicznej podstrony poświęconej konkretnemu przepisowi, gdzie wyświetlany jest pełny opis przygotowania, lista składników oraz autor.
Dodawanie treści: Zaimplementowano formularz oparty na metodzie HTTP POST, który pozwala użytkownikom na wysłanie nowego przepisu do bazy danych serwera.
Responsywna nawigacja: Na urządzeniach mobilnych standardowe menu jest ukrywane i zastępowane rozwijanym panelem bocznym (tzw. hamburger menu), co poprawia czytelność interfejsu na małych ekranach.
3. Pobranie projektu
Sposób instalacji i uruchomienia projektu: Aby uruchomić aplikację lokalnie na komputerze, wymagane jest posiadanie zainstalowanego środowiska Node.js oraz systemu kontroli wersji Git. Sklonuj repozytorium na dysk lokalny za pomocą terminala: git clone https://github.com/wtorek01/ksiazka_kucharska_project01.git cd Ksiazka_Kucharska

Instalacja zależności: Zainstaluj wszystkie wymagane biblioteki (React, Express, json-server, react-icons) komendą: npm install.
Uruchomienie aplikacji: Projekt posiada skonfigurowany skrypt startowy, który automatycznie buduje frontend i uruchamia backend na jednym porcie. Wpisz w terminalu: npm start Komenda ta wykona kolejno: vite build – zbuduje wersję produkcyjną strony do folderu dist. node server.cjs – uruchomi serwer API oraz serwowanie plików.
Dostęp: Po uruchomieniu aplikacja dostępna jest w przeglądarce pod adresem: http://localhost:3000
Jest jeszcze jeden sposob by wyswietlic strone, wystarczy wpisac "patrykgotuje.online" by zobaczyc strone na zywo :)

4. Instrukcja konfiguracji
Projekt został zaprojektowany w architekturze "Zero Configuration", co oznacza, że nie wymaga ręcznego tworzenia plików .env ani generowania zewnętrznych kluczy API do podstawowego działania.