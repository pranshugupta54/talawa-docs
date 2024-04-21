[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeActionItem

# Module: resolvers/Mutation/removeActionItem

## Table of contents

### Variables

- [removeActionItem](resolvers_Mutation_removeActionItem.md#removeactionitem)

## Variables

### removeActionItem

• `Const` **removeActionItem**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removeActionItem"``]

This function enables to remove an action item.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the action item exists.
3. If the user is authorized.
4. If the user has appUserProfile.

#### Defined in

[src/resolvers/Mutation/removeActionItem.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Mutation/removeActionItem.ts#L35)
