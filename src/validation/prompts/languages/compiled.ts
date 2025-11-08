/**
 * Java/Kotlin-specific TDD rules - ONLY applied to .java and .kt files.
 * Based on Kent Beck's "Obvious Implementation" - allows complete POJOs/data classes.
 */
export const COMPILED_LANGUAGE_RULES = `## Java/Kotlin TDD Rules

**Kent Beck Principle**: "If you know what to type and can do it quickly, then do it"

### Decision Tree

**IF test file exists:**
1. **Pure POJO/data class** (only fields + constructor + getters/setters, NO logic) → ALLOW complete structure
2. **Has business logic** (if/else, calculations, validation, method calls) → BLOCK, need test output
3. **Empty stub** (return null, return 0, empty body) → ALLOW (fixes compilation)

**IF no test file** → BLOCK all implementation

### Pure POJO Definition

**ALLOW as ONE edit when test file exists:**
- Fields: private String name;
- Constructor: this.field = param; (simple assignments only)
- Getters: return field; (no calculations)
- Setters: this.field = value; (no validation)
- Annotations: @Override, @NotNull, @JsonProperty

**Example ALLOWED**:
\`\`\`java
private String email, name;
public Customer(String id, String email, String name) {
    this.id = id; this.email = email; this.name = name;
}
public String getEmail() { return email; }
\`\`\`

**BLOCKED (business logic)**:
- Conditionals: if/else, switch, ternary
- Calculations: arithmetic, string concat
- Validation: null checks, exceptions
- Method calls: UUID.randomUUID(), LocalDate.now()
- Default values: this.active = true;

### Compilation Stubs

When test file exists, ALLOW empty stubs even with test output:
- Empty methods: return null; return 0; empty {}
- Purpose: Fix compilation before test can run

**Rationale**: Compilation failures are valid TDD failures. Empty stubs enable the RED phase.
`
