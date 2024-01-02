# Inspired by https://github.com/hunghg255/verify-commit-msg

This action gonna check the commit lint of the pull request

## Inputs

### `regex`

**Required** Branch Regex

## Outputs

### `pass`

Commit lint pass or not

## Example usage

```yaml
verify-branch-name:
    name: Verify Branch Name
    runs-on: ubuntu-latest
    steps:
        - uses: namnh240795/verify-branch-name-action@v1.1.0
            with:
                regex: production
```