FROM golang:1.16.6-alpine3.14 AS build

WORKDIR /app

COPY . .

RUN go build -o app

FROM scratch

COPY --from=build /app/app /

CMD ["/app"]