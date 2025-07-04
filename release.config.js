const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ["@semantic-release/git", {
            "assets": ["dist/*.js"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        '@semantic-release/github',
        'semantic-release-github-actions-tags'
    ],
    tagFormat: `v\${version}-alpha`
};

module.exports = config;
