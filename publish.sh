#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to display usage
usage() {
    echo -e "${YELLOW}Usage: $0 <patch|minor|major|deploy>${NC}"
    echo -e "${YELLOW}Examples:${NC}"
    echo "  $0 patch   # 1.0.0 -> 1.0.1"
    echo "  $0 minor   # 1.0.0 -> 1.1.0"
    echo "  $0 major   # 1.0.0 -> 2.0.0"
    echo "  $0 deploy  # Build and publish only (no version bump, no git)"
    exit 1
}

# Check if version type is provided
if [ $# -eq 0 ]; then
    echo -e "${RED}Error: Version type is required${NC}"
    usage
fi

VERSION_TYPE=$1

# Validate version type
if [[ "$VERSION_TYPE" != "patch" && "$VERSION_TYPE" != "minor" && "$VERSION_TYPE" != "major" && "$VERSION_TYPE" != "deploy" ]]; then
    echo -e "${RED}Error: Invalid version type '$VERSION_TYPE'${NC}"
    usage
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found in current directory${NC}"
    exit 1
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${YELLOW}Current version: ${CURRENT_VERSION}${NC}"

# Handle deploy-only mode
if [[ "$VERSION_TYPE" == "deploy" ]]; then
    echo -e "${YELLOW}Deploy-only mode: No version bump, no git operations${NC}"
    echo -e "${YELLOW}Are you sure you want to publish the current version (${CURRENT_VERSION})? (y/N)${NC}"
    read -r CONFIRM

    if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
        echo -e "${YELLOW}Cancelled${NC}"
        exit 0
    fi

    # Build the project
    echo -e "${YELLOW}Building project...${NC}"
    npm run build

    if [ $? -ne 0 ]; then
        echo -e "${RED}Build failed! Aborting publish.${NC}"
        exit 1
    fi

    # Publish to npm
    echo -e "${YELLOW}Publishing to npm...${NC}"
    npm publish --access=public

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Successfully published version ${CURRENT_VERSION}!${NC}"
        echo -e "${GREEN}📦 Package: https://www.npmjs.com/package/$(node -p "require('./package.json').name")${NC}"
    else
        echo -e "${RED}❌ Publish failed!${NC}"
        exit 1
    fi
    exit 0
fi

# Confirm action
echo -e "${YELLOW}Are you sure you want to bump ${VERSION_TYPE} version and publish? (y/N)${NC}"
read -r CONFIRM

if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
    echo -e "${YELLOW}Cancelled${NC}"
    exit 0
fi

# Build the project
echo -e "${YELLOW}Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed! Aborting publish.${NC}"
    exit 1
fi

# Bump version
echo -e "${YELLOW}Bumping ${VERSION_TYPE} version...${NC}"
npm version $VERSION_TYPE --no-git-tag-version

if [ $? -ne 0 ]; then
    echo -e "${RED}Version bump failed!${NC}"
    exit 1
fi

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}Version bumped to: ${NEW_VERSION}${NC}"

# Commit changes
echo -e "${YELLOW}Committing version change...${NC}"
git add .
git commit -m "chore: bump version to $NEW_VERSION"

# Create git tag
echo -e "${YELLOW}Creating git tag...${NC}"
git tag "v$NEW_VERSION"

# Push changes and tags
echo -e "${YELLOW}Pushing to remote...${NC}"
git push origin master
git push origin "v$NEW_VERSION"

# Publish to npm
echo -e "${YELLOW}Publishing to npm...${NC}"
npm publish --access=public

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Successfully published version ${NEW_VERSION}!${NC}"
    echo -e "${GREEN}📦 Package: https://www.npmjs.com/package/$(node -p "require('./package.json').name")${NC}"
else
    echo -e "${RED}❌ Publish failed!${NC}"
    exit 1
fi