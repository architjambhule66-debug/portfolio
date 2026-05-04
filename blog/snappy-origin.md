# Why I stopped using requests and wrote my own HTTP client

I've been writing Python for a few years now. And for most of that time, my HTTP code looked like this:

```python
import requests
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10))
def fetch_data(url):
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    return response.json()
```

This pattern worked. But I was copying it into every project. Then I'd add caching. Then rate limiting. Then the function would grow to 40 lines and I'd wonder why I didn't just have a proper library.

## The breaking point

The project that finally pushed me over the edge was a data pipeline that hit 6 different APIs, each with its own quirks:

- One needed a 1 req/sec rate limit or it'd ban me
- One had flaky endpoints that needed retries
- One had expensive responses I wanted to cache for 5 minutes
- All of them needed auth headers injected consistently

My `http_utils.py` file became 300 lines of half-baked infrastructure.

## What I built

`snappy` started as that utils file, refactored into something I could actually be proud of. The goals were simple:

1. **Zero boilerplate** — sane defaults for timeouts, retries, and error handling
2. **Optional batteries** — caching and rate limiting as first-class features, not afterthoughts
3. **Familiar API** — if you know `requests`, you know `snappy`

```python
import snappy

client = snappy.Client(retries=3, cache=True, rate_limit=5)
data = client.get("https://api.example.com/data").json()
```

That's it. Three kwargs and you have a production-grade HTTP client.

## What I learned building it

**Retry logic is harder than it looks.** You need to think about which status codes are retryable (503 yes, 404 no), what backoff strategy to use, and how to handle non-idempotent requests.

**Caching has edge cases everywhere.** Varying by query params. Respecting `Cache-Control` headers. Cache invalidation. I implemented a simple TTL cache and documented that it deliberately ignores RFC 7234 compliance — good enough for most scripts, not for CDN replacement.

**The ergonomics matter more than the features.** The first version had 20 config options. Nobody (including me) used most of them. The current version has 6. It's better.

## Try it

```bash
pip install snappy
```

The source is on [GitHub](https://github.com/yourusername/snappy). If you've ever copy-pasted retry logic one too many times, I think you'll find it useful.