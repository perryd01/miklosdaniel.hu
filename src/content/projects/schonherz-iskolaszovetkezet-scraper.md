---
title: 'Scraping job ads on Schönherz Iskolaszövetkezet'
heroTitle: 'Scraping job ads on Schönherz Iskolaszövetkezet'
description: 'Golang script for scraping job ads on Schönherz Iskolaszövetkezet.'
date: '2022-05-21'
categories:
  - golang
  - webscraping

published: false
links:
  github: https://github.com/perryd01/sch-isk-scraper

---

This is a Golang module / CLi tool for scraping job ads on [Schönherz Iskolaszövetkezet](https://schonherz.hu/)

## Usage

### CLI

```go
go run ./cmd/main.go -city=budapest -jobtype=fejleszto---tesztelo -allDetail
```

## Example

```go
baseUrl := "https://schonherz.hu"
params := requests.RequestParams{
  IsListing: false,
  JobID:     0,
  JobName:   "",
  City:      options.City,
  JobType:   options.JobType,
 }

 listing, err := requests.FetchListing(params)
 if err != nil {
  log.Fatal(err)
 }

 jobs, err := parser.ReadListing(listing, baseUrl)
 if err != nil {
  log.Fatal(err)
 }

 if options.Full {
  for i := 0; i < len(jobs); i++ {
   doc, err := requests.FetchSingleJob(&jobs[i])
   if err != nil {
    log.Fatal(err)
   }
   parser.ReadOneJob(doc, &jobs[i])
  }
 }
```
