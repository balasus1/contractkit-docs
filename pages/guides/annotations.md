---
title: Annotations
description: Attach @PreAuthorize, @Loggable, and @JsonView to an endpoint and see exactly what code they generate.
icon: at-sign
---

# Annotations

ContractKit lets you attach three Spring-ecosystem annotations to an endpoint, without writing Java by hand. They're set directly on the endpoint's edit screen, as toggle + expression pairs.

## The three annotations

| Annotation | Toggle | Expression field | Placeholder example |
|------------|--------|-------------------|----------------------|
| `@PreAuthorize` | Enable security | Authorization expression | `isAuthenticated()` |
| `@Loggable` | Enable audit logging | Action name | `READ-CREATE-SCREEN-KRI` |
| `@JsonView` | Enable response filtering | View class | `KRIViews.ViewScreen.class` |

Turn on the toggle for whichever annotations this endpoint needs, then fill in the expression. Leave a toggle off and that annotation is omitted entirely from the generated controller method.

## What gets generated

For an endpoint with all three enabled, the Java generator emits:

```java
@PreAuthorize("isAuthenticated()")
@Loggable(action = "READ-CREATE-SCREEN-KRI")
@JsonView(KRIViews.ViewScreen.class)
@Operation(summary = "...", description = "Generated from API Contract Builder")
@GetMapping("/users/{id}")
public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
    ...
}
```

The controller class only imports what it actually uses — if no endpoint in the module enables `@Loggable`, the `Loggable` import is left out entirely.

<Callout type="warning" title="The default import paths are placeholders">
  Generated imports for `@Loggable` and `@JsonView`'s view classes point at example packages (`com.asymmetrix.grc.common.aspect.Loggable`, `com.asymmetrix.grc.riskkri.utils.KRIViews`) from ContractKit's own reference implementation — they are **not** a real shared library you can depend on. After generating code, replace these imports with your own project's actual `@Loggable` aspect and `@JsonView` view classes (or Jackson's stock `@JsonView` if you don't have a custom one).
</Callout>

## What doesn't apply

`@PreAuthorize`, `@Loggable`, and `@JsonView` are Spring/Java-specific — they have no equivalent in the generated TypeScript or Angular clients and are silently skipped by those generators. If you need equivalent behavior (auth guards, logging, response shaping) on the frontend, add it yourself in the generated client.
