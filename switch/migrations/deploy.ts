// Migrations are an early feature. Currently, they're nothing more than this
// single deploy script that's invoked from the CLI, injecting a provider
// configured from the workspace's Anchor.toml.

import * as anchor from '@project-serum/anchor';

module.exports = async function (provider: anchor.Provider) {
  anchor.setProvider(provider);
};
