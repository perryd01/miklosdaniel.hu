---
title: Greatest Common Divisor program in Vlang
heroTitle: GCD in Vlang
description: Trying out a new programming called Vlang by implementing the Greatest Common Divisor algorithm.
date: '2022-4-17'
categories:
  - sveltekit
  - svelte
published: true

links:
  github: https://github.com/perryd01/v-gcd
  website: https://vpm.vlang.io/packages/perryd01.gcd
---

V is a compiled, statically typed programming language that is pretty similar to Golang.

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
