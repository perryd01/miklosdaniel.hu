---
title: 'Greatest Common Divisor program in Vlang'
excerpt: 'My first experience with Vlang, coding a simple algorithm, the greatest common divisor.'
coverImage: '/assets/blog/base_resize.jpg'
date: '2022-04-17'
author:
  name: Miklos Daniel
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/base_resize.jpg'
---

V is a compiled, statically typed programming language that is pretty similar to Golang. [You should check out it on their website](https://vlang.io/).

The code:
```v
module gcd

pub fn get(first int, second int) int {
	mut remainder := 0
	mut f := first
	mut s := second
	for {
		if f % s > 0 {
			remainder = f % s
			f = s
			s = remainder
		} else {
			break
		}
	}

	return s
}
```

[View on GitHub](https://github.com/perryd01/v-gcd)