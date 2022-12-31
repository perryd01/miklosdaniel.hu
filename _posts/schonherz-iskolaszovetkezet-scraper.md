---
title: 'Scraping job ads on Schönherz Iskolaszövetkezet'
excerpt: 'Golang script for scraping job ads on Schönherz Iskolaszövetkezet.'
coverImage: '/assets/blog/base_resize.jpg'
date: '2022-05-21'
author:
  name: Miklos Daniel
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/base_resize.jpg'
---

# sch-isk-scraper

This is a Golang module / CLi tool for scraping job ads on [Schönherz Iskolaszövetkezet](https://schonherz.hu/)


## Usage
### CLI
```golang
$ go run ./cmd/main.go -city=budapest -jobtype=fejleszto---tesztelo -allDetail
```
#### City
possible values for City
- budapest
- debrecen
- kecskemet
- miskolc
- pecs
- szeged

#### JobType
possible values for JobType:
- adminisztrativ
- alkalmi---projekt-jellegu
- fejleszto---tesztelo
- gazdasagi
- grafikus---designer
- informatikai---support
- muszaki
- otthonrol-vegezheto
- szaktudast-nem-igenylo-18-ev-alatt-
- jobs-for-foreign-students

#### allDetails
allDetails means it's going to fetch all detail pages for the full job description

### Module
Example
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

[View on GitHub](https://github.com/perryd01/sch-isk-scraper)  