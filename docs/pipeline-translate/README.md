# Webrtc Translate

Real-time WebRTC speech translation module with incremental translation logic built in.

## What It Does

- browser mic input over WebRTC
- Deepgram STT in the selected source language
- OpenAI translation
- ElevenLabs TTS in the target language
- translated audio streamed back to the browser

Supported pairs:

- `en-fr`, `fr-en`
- `en-de`, `de-en`
- `en-es`, `es-en`
- `en-pt`, `pt-en`
- `en-ar`, `ar-en`

## Run

1. Copy `.env.example` to `.env`
2. Fill in your API keys and voice IDs
3. Start the server:

```bash
uvicorn main:app --reload
```

4. Open `http://127.0.0.1:8000/`


## Notes

- Settings come from `src/settings.py`
- You can configure STT model, TTS model, and VAD params through `.env`
- `.env.example` includes all supported variables

Current optimizations on the base service for realtime outputs:
  - incremental clause-by-clause translation instead of only full-turn translation
  - serialized translation and TTS queue to avoid overlapping fragments
  - explicit ElevenLabs context flush/close to reduce websocket context buildup
