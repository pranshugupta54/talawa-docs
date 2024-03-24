[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Subscription/onPluginUpdate

# Module: resolvers/Subscription/onPluginUpdate

## Table of contents

### Variables

- [onPluginUpdate](resolvers_Subscription_onPluginUpdate.md#onpluginupdate)

### Functions

- [filterFunction](resolvers_Subscription_onPluginUpdate.md#filterfunction)

## Variables

### onPluginUpdate

• `Const` **onPluginUpdate**: [`SubscriptionResolvers`](types_generatedGraphQLTypes.md#subscriptionresolvers)[``"onPluginUpdate"``]

#### Defined in

[src/resolvers/Subscription/onPluginUpdate.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/708df7e/src/resolvers/Subscription/onPluginUpdate.ts#L29)

## Functions

### filterFunction

▸ **filterFunction**(`payload`, `context`): `Promise`\<`boolean`\>

This property included a `subscribe` method, which is used to
subscribe the `current_user` to get updates for Group chats.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |
| `context` | `any` |

#### Returns

`Promise`\<`boolean`\>

**`Remarks`**

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

#### Defined in

[src/resolvers/Subscription/onPluginUpdate.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/708df7e/src/resolvers/Subscription/onPluginUpdate.ts#L20)
