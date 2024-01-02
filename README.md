# Inspired by https://github.com/hunghg255/verify-commit-msg

This action gonna check the commit lint of the pull request

## Inputs

### `github-token`

**Required** Github token

### `maximum-commit-number`

## Outputs

### `pass`

Commit lint pass or not

## Example usage

```yaml
uses: @namnh240795/verify-commit-message-action@v1.12
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
```