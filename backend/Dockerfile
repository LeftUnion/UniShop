# базовый образ для нашего приложения
FROM mcr.microsoft.com/dotnet/aspnet:6.0

RUN apt-get update && apt-get upgrade -y  && apt install -y libc6-dev=2.33-0ubuntu9.2

# рабочая директория внутри контейнера для запуска команды CMD
WORKDIR /testapp

# копируем бинарники для публикации нашего приложения(напомню,что dockerfile лежит в корневой папке проекта) в рабочую директорию
COPY /bin/Debug/net6.0 /testapp

# пробрасываем из контейнера порт 5000, который слушает Kestrel
EXPOSE 5035

# при старте контейнера поднимаем наше приложение
CMD ["./backend"]