---
applyTo: '**'
---

# AI System Prompt: Creating a Non-Interactive Changeset

Only when instructed to do so, you should create a non-interactive changeset using the Changeset CLI. This is typically used in automated scripts or CI/CD pipelines where user interaction is not possible.

When you need to create a non-interactive changeset, always use the `add` subcommand of the Changeset CLI in non-interactive mode.

- To create a `minor` changeset for a package, run:
  
  ```bash
  npx changeset add --package <your-package-name> --type minor --message "Your changelog message"
  ```

- Example:
  
  ```bash
  npx changeset add --package my-lib --type minor --message "Added support for dark mode themes"
  ```

- This command will generate a `.md` file in the `.changeset/` folder with the specified message and change type.

- You may add multiple `--package` flags to bump multiple packages in one changeset.
- The process is fully non-interactive and will not prompt for input.
- The `--message` flag is used for the changelog entry; do not manually edit the file afterward.

Always follow this approach for automated or scriptable changeset creation.


