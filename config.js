// ============================================================
//  PORTFOLIO CONFIG
//  Edit this file to customize your portfolio.
//  All content — projects, blog posts, skills — lives here.
// ============================================================

const PORTFOLIO = {

  // ── PROFILE ───────────────────────────────────────────────
  profile: {
    name: "Archit Jambhule",
    handle: "~/archit",

    // Hero section — use <br/> for line breaks, <em> for italic
    heroName: "Archit<br/><em>Jambhule</em>",

    // Shown in hero and used on the home page
    bio: "I build scalable and efficient <strong>Voice AI systems</strong>. Have worked across all the verticals of AI and ML",

    // Chips shown below bio
    tags: ["Python", "Voice AI", "Transformer Models", "Speech Recognition", "Speech Synthesis", "STT/TTS Fine-tuning"],

    // Status chips in the hero eyebrow — edit the second part
    status: "available for work",

    // Stats row on home page
    stats: [
      { num: "12",  suffix: "+", label: "open source projects" },
      { num: "40",  suffix: "k", label: "PyPI downloads" },
      { num: "3",   suffix: "",  label: "years building" },
      { num: "8",   suffix: "",  label: "blog posts" },
    ],

    // Sidebar social icons — use text/emoji as icons
    social: [
      { label: "GitHub",  icon: "GH", url: "https://github.com/architjambhule66-debug" },
      { label: "Twitter", icon: "𝕏",  url: "https://twitter.com/yourhandle" },
      { label: "PyPI",    icon: "Py", url: "https://pypi.org/user/yourusername" },
      { label: "Email",   icon: "✉",  url: "mailto:architjambhule66@gmail.com" },
    ],

    // Shown on the about page below the title
    aboutSubtitle: "AI/ML Engineer and open source enthusiast",
  },

  // ── PROJECTS ─────────────────────────────────────────────
  // Each project can have:
  //   id:          unique slug (used internally)
  //   name:        display name
  //   description: short text shown on card
  //   tags:        array of tech labels
  //   badges:      extra badge labels (e.g. "CLI", "stable")
  //   featured:    true → green left border + "★ featured" badge
  //   pypi:        true → shows PyPI badge
  //   pypi_url:    link to PyPI page
  //   github:      link to GitHub repo
  //   docs:        path(s) to markdown files for the docs viewer
  //                Can be a string, or an array of { label, path } objects
  //                e.g. "docs/myproject/README.md"
  //                or  [{ label: "Readme", path: "docs/myproject/README.md" },
  //                     { label: "API",    path: "docs/myproject/API.md" }]

  projects: [
    {
      id: "hermes-pm",
      name: "hermes",
      description: "Fast Python package manager with uv-like optimizations",
      tags: ["python", "package manager", "uv-like optimizations"],
      featured: true,
      pypi: true,
      badges: ["CLI"],
      pypi_url: "https://pypi.org/project/hermes-pm/",
      github: "https://github.com/architjambhule66-debug/hermes-pm",
      docs: [
        { label: "README",     path: "docs/hermes/README.md" },
        { label: "Quickstart", path: "docs/snappy/quickstart.md" },
        { label: "API Ref",    path: "docs/snappy/api.md" },
      ],
    },
    {
      id: "redakt",
      name: "redakt",
      description: "redakt is a Python module for detecting and redacting personally identifiable information from text.",
      tags: ["python", "PII detection", "PII redacting"],
      badges: ["CLI"],
      pypi: true,
      pypi_url: "https://pypi.org/project/redakt/",
      github: "https://github.com/architjambhule66-debug/redakt",
      docs: [
          { label: "README",     path: "docs/redakt/README.md" },
          { label: "Quickstart", path: "docs/redakt/quickstart.md" },
          { label: "API Ref",    path: "docs/redakt/api.md" },
      ],
    },
    {
      id: "Pipeline-translate",
      name: "pipeline-translate",
      description: "Real-time WebRTC speech translation module with incremental translation logic built in",
      tags: ["webrtc", "machine translation"],
      badges: ["Fastapi"],
      pypi: false,
      //pypi_url: "https://pypi.org/project/redakt/",
      github: "https://github.com/architjambhule66-debug/Pipeline-translate",
      docs: [
          { label: "README",     path: "docs/pipeline-translate/README.md" },
          { label: "Quickstart", path: "docs/redakt/quickstart.md" },
          { label: "API Ref",    path: "docs/redakt/api.md" },
      ],
    },
  ],

  // ── BLOG POSTS ───────────────────────────────────────────
  // Each post can have:
  //   title:    post title
  //   date:     display date (string)
  //   readTime: e.g. "5 min read"
  //   excerpt:  short preview text
  //   tags:     array of strings
  //   file:     path to a .md file in your repo  ← recommended
  //   content:  inline markdown string            ← for short posts

  blog: [
    {
      title: "Why I stopped using requests and wrote my own HTTP client.",
      date: "Apr 2025",
      readTime: "7 min read",
      excerpt: "After years of wrestling with retries, timeouts, and auth boilerplate, I finally built the library I always wanted.",
      tags: ["python", "open source"],
      file: "blog/snappy-origin.md",
    },
    {
      title: "The underrated power of pyproject.toml",
      date: "Feb 2025",
      readTime: "5 min read",
      excerpt: "Everything you can do in pyproject.toml that you're probably still doing in setup.py or random config files.",
      tags: ["python", "packaging"],
      // Inline example — works without a file
      content: `
# The underrated power of pyproject.toml

PEP 517 and PEP 518 changed Python packaging forever, but most developers still aren't taking full advantage of **pyproject.toml**.

## What can go in there?

Almost everything:

- Build system configuration (\`[build-system]\`)
- Project metadata (\`[project]\`)
- Tool configs: black, isort, pytest, mypy, ruff — all in one file

\`\`\`toml
[tool.ruff]
line-length = 88
select = ["E", "F", "I"]

[tool.mypy]
strict = true
python_version = "3.11"
\`\`\`

## Why it matters

A single \`pyproject.toml\` eliminates \`setup.cfg\`, \`setup.py\`, \`.flake8\`, \`mypy.ini\`, \`pytest.ini\`, and \`.isort.cfg\`. That's six files reduced to one.

The DX improvement is real.
      `,
    },
    {
      title: "Building a zero-dependency Python CLI in 2025",
      date: "Jan 2025",
      readTime: "9 min read",
      excerpt: "argparse is more powerful than you think. Here's a pattern for clean, testable CLIs without Click or Typer.",
      tags: ["python", "cli", "tutorial"],
      file: "blog/zero-dep-cli.md",
    },
  ],

  // ── CAREER ───────────────────────────────────────────────
  // Rendered as a dedicated tab for your professional journey.
  //
  //   subtitle: shown under the Career page title
  //   journey:  markdown intro for your overall professional story
  //   roles:    chronological list of roles or experiences
  //
  // Resume button:
  //   resume:      optional download button config { label, file }
  //
  // Each role can have:
  //   role:        your title / position
  //   company:     company name
  //   companyUrl:  optional company website / public URL
  //   period:      e.g. "2024 - Present"
  //   location:    optional location / work mode
  //   summary:     bullet points as an array, or a multi-line string
  //   workedOn:    optional array of public projects
  //                each item: { name, url, description? }
  career: {
    subtitle: "Professional journey, companies, and public work.",
    resume: {
      label: "Download Resume",
      file: "resume/resume.pdf",
    },
    journey: `
    `,
    roles: [
      {
        role: "AI Engineer",
        company: "VoicingAI",
        companyUrl: "https://voicingai.com/",
        period: "2025 - Present",
        location: "Remote",
        summary: `
        Engineered a multi-provider voice AI orchestration platform for real-time telephony, enabling full-duplex, low-latency STT–LLM–TTS streaming, distributed state management, and high-throughput SIP routing.
        Fine-tuned Whisper and Conformer STT on Indian dialects cutting WER by [X]%; fine-tuned Qwen for tool-calling with [X]% gain on the TAU benchmark.
        Curated 900-hour synthetic multilingual dataset across 31 languages (Indian + European) powering in-house STT, TTS and Speech to Speech translation model finetuning.
        Deployed voice agent pipelines for Philips, LTM, LT Realty, SURA Insurance, Anywhere RE with full prod ownership; orchestration engine achieving sub-800ms time-to-first-audio.
        Shipped AgentforAgents — multi-agent system (8 agents) that designs and deploys complete voice agent flows via chat, reducing agent setup time from hours to under 5 minutes
        `,
        workedOn: [
          { name: "Voicing LLM V3", url: "https://huggingface.co/voicing-ai/Voicing-Agent-V3-35B-A3B" },
          { name: "LLM Function Calling finetuning", url: "https://huggingface.co/datasets/voicing-ai/VoicingAI-LLM-Functions_V0.1" }
        ],
      },
      {
        role: "Machine Learning Engineer",
        company: "Samespace",
        companyUrl: "https://samespace.com/",
        period: "2024 - 2025",
        location: "Mumbai, India",
        summary: `
        Architected centralized gRPC microservice, unifying LLM, STT, and TTS capabilities across all Samespace products.
        Built and deployed Sphere, a scalable RAG-based document intelligence platform with integrations to vector and graph databases like Qdrant, and Neo4j, achieving 98% retrieval precision.
        Selected and fine-tuned open-source models using QLoRA and PEFT with instruction tuning on domain-specific and synthetic datasets, improving task-specific accuracy by 65%.
        Developed Origon AI, a multi-agent AI system using LangChain and SWARM, enabling dynamic handling of user queries across voice calls, text messages and more, achieving a query resolution success rate of 92%
        `,
        workedOn: [
          { name: "Origon AI", url: "https://origon.ai/" },
        ],
      },
    ],
  },

  // ── ABOUT PAGE ───────────────────────────────────────────
  about: {
    // Rendered as markdown — supports **bold**, `code`, etc.
    bio: `
I'm a AI/ML Engineer and open source enthusiast. I spend most of my time
writing **Python**, contributing to libraries on PyPI, and building scalable and efficient voice AI systems.
    `,

    // Skill / info cards (2-column grid)
    cards: [
      {
        title: "Languages & Runtimes",
        items: ["Python", "TypeScript", "Bash", "SQL", "Go (learning)"],
      },
      {
        title: "Frameworks & Libraries",
        items: ["FastAPI","Git", "Transformers", "PyTorch", "OpenAI", "Anthropic", "LangChain", "LlamaIndex"],
      },
      {
        title: "Interests",
        items: ["Building Multi-Modal AI Systems", "Multi-agent orchestration", "Packaging", "Voice AI", "Speech Recognition", "Speech Synthesis", "STT/TTS Fine-tuning"],
      },
      {
        title: "Currently",
        items: ["Building hermes", "Building redakt", "Open to SWE roles"],
      },
    ],

    // Chronological timeline
    timeline: [
      {
        year: "2025",
        title: "snappy hits 40k downloads",
        description: "The HTTP client library I built out of frustration became genuinely useful for other people.",
      },
      {
        year: "2024",
        title: "Started shipping on PyPI seriously",
        description: "Released 4 libraries, learned a lot about packaging, versioning, and changelogs.",
      },
      {
        year: "2023",
        title: "First open source contribution",
        description: "Merged a PR into a 10k ★ repo. Took three tries. Worth it.",
      },
      {
        year: "2022",
        title: "Started writing Python seriously",
        description: "Switched from scrappy scripts to proper packages, tests, and CI.",
      },
    ],
  },

};
