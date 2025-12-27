---
tags:
  - Apple-AI-ML
  - AI-ML
date: 2025-12-26 11:58:47 +00:00
title: Create ML - Language Processing
---
## 1. NLP and Finding the dominant language

This is one of the simplest but most foundational NLP tasks. The goal here is to answer the question "What language is this text written in?"

There are few ways to do this.

### Character-level patterns
Languages have unique patterns - letter frequencies, digraphs and trigraphs.

|**Digraphs**||**Trigraphs**||
|---|---|---|---|
|**Grapheme**|**Example**|**Grapheme**|**Example**|
|**ch**|**Ch**ur**ch**|**tch**|Wa**tch**|
|**sh**|**Sh**ip|**dge**|Bri**dge**|
|**th**|**Th**ink / **Th**at|**igh**|N**igh**t|
|**ph**|**Ph**one|**ore**|S**ore**|
|**kn**|**Kn**ee|**air**|St**air**|
|**wh**|**Wh**eel|**ear**|L**ear**n|
|**ck**|Ba**ck**|**ure**|P**ure**|
|**ng**|Si**ng**|**sch**|**Sch**ool|
|**qu**|**Qu**een|**iou**|Prec**iou**s|

For example:
- English loves "th", "ing", "the"
- German loves "sch"

### Statistical Models
Older Systems used [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) or [Markov models](https://en.wikipedia.org/wiki/Markov_model) trained on large corpora. They compare your text o known distributions and pick the closest match. 

### Modern ML/Deep Learning
Transformers or CNNs trained on multilingual datasets can classify language with extremely high accuracy, even for short text.

### Hybrid approaches
Many systems combine heuristics and ML
- code-mixed test - "Namaste dude, como estas"
- For short texts - "oui", "ha", "ja"
- Popularly borrowed words - "Samosa", "Pizza"
## 2. Why finding the dominant language is important

Finding the right dominant language is a gateway for several things.
- Choosing the right tokenizer
- Routing the text to the right translation model/system
- Enabling multilingual search
- Improving speech recognition
- Localization of UI elements

## 3. Apple's `NaturalLanguage` package


> [!info] Here are the list of [ISO 639 language codes](https://www.ibm.com/docs/en/informix-servers/14.10.0?topic=uif-language-country-region-codes-used-by-is0-639)

### Find the dominant Language in a sentence

In Xcode Playground, run this code.

```swift
import NaturalLanguage

let recognizer = NLLanguageRecognizer()
recognizer.processString("Namaste, como estas?)
if let language = recognizer.dominantLanguage {
    print(language.rawValue)
}
```

The output would be: `es` even though `Namaste, como estas` has `Sanskrit` or `Hindi` with Espanol. But, there are more Espanol words in the sentence.

### Find the top 3 possible languages in a sentence

```swift
import NaturalLanguage

let recognizer = NLLanguageRecognizer()
recognizer.processString("Bonjour, como estas.")
let languageProbabilities = recognizer.languageHypotheses(withMaximum: 3)

for (language, probability) in languageProbabilities {
    print("Detected \(language.rawValue). Probability \(probability)")
}
```

The output would be:
```
Detected pt. Probability 0.34345224499702454
Detected es. Probability 0.6560376286506653
Detected fr. Probability 0.0003371217171661556
```

### `NLTagger` for tokenizing a sentence

```swift
import NaturalLanguage

// English, Sanskrit and Japanese
let array = ["Doesn't it?", "त्वं कुत्र गच्छसि?", "私は学生です"]

let tagger = NLTagger(tagSchemes: [.tokenType])

for text in array {
    print("---")
    tagger.string = text
    
    tagger.enumerateTags(
        in: text.startIndex..<text.endIndex,
        unit: .word,
        scheme: .tokenType,
        options: [.omitPunctuation, .omitWhitespace]) { (tag, range) -> Bool in
            print(text[range])
            return true
        }
}
```

The output will be:
```
---
Does
n't
it
---
त्वं
कुत्र
गच्छसि
---
私
は
学生
です
```

### `NLTagger` for finding Parts of Speech

```swift
import NaturalLanguage

// English, Sanskrit and Japanese
let array = ["Doesn't it?", "त्वं कुत्र गच्छसि?", "私は学生です"]

let tagger = NLTagger(tagSchemes: [.lexicalClass, .language, .script])

for text in array {
    print("---")
    tagger.string = text
    
    tagger.enumerateTags(
        in: text.startIndex..<text.endIndex,
        unit: .word,
        scheme: .lexicalClass,
        options: [.omitPunctuation, .omitWhitespace]) { (tag, range) -> Bool in
            print(text[range] + ":" + (tag?.rawValue ?? "Unknown"))
            return true
        }
}
```

Output: 
```
---
Does:Verb
n't:Adverb
it:Pronoun
---
त्वं:OtherWord
कुत्र:OtherWord
गच्छसि:OtherWord
---
私:OtherWord
は:OtherWord
学生:OtherWord
です:OtherWord
```

## 4. Sentiment Analysis of a sentence

```swift
import NaturalLanguage

func sentimentScore(for text: String) -> Double {
    let tagger = NLTagger(tagSchemes: [.sentimentScore])
    tagger.string = text

    let (sentiment, _) = tagger.tag(at: text.startIndex,
                                    unit: .paragraph,
                                    scheme: .sentimentScore)

    // Convert the tag (String) into a Double
    return Double(sentiment?.rawValue ?? "0") ?? 0
}

let array = [
    // Very Positive
    "This product is absolutely perfect and exceeded every single one of my expectations!",
    
    // Mildly Positive
    "The service was just fine and experience was good.",
    
    // Neutral
    "The delivery arrived at 3 PM and was placed on the front porch.",
    
    // Mildly Negative
    "The food was okay, but the wait time was a bit longer",
    
    // Very Negative
    "This was a catastrophic failure and the most horrible experience I have ever had."
]

for sentence in array {
    let score = sentimentScore(for: sentence)
    print("\(score):\t \(sentence)")
}
```

The output:
```
1.0:	 This product is absolutely perfect and exceeded every single one of my expectations!
0.2:	 The service was just fine and experience was good.
-0.8:	 The delivery arrived at 3 PM and was placed on the front porch.
-1.0:	 The food was okay, but the wait time was a bit longer
-1.0:	 This was a catastrophic failure and the most horrible experience I have ever had.
```