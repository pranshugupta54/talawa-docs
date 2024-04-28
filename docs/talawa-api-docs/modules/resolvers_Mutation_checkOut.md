[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/checkOut

# Module: resolvers/Mutation/checkOut

## Table of contents

### Variables

- [checkOut](resolvers_Mutation_checkOut.md#checkout)

## Variables

### checkOut

• `Const` **checkOut**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"checkOut"``]

Handles the check-out process for event attendees.

This resolver function allows event admins or superadmins to check-out attendees from a specific event.
It verifies the existence of the current user, the event, and the attendee to be checked in,
and ensures proper authorization before performing the check-in operation.

**`Param`**

The parent resolver.

**`Param`**

Arguments containing data for the check-in, including the eventId, userId

**`Param`**

Context object containing user authentication and request information.

**`Throws`**

NotFoundError if the current user, event, or attendee is not found.

**`Throws`**

UnauthorizedError if the current user lacks authorization to perform the check-out operation.

**`Throws`**

ConflictError if the attendee is not checked in and if the user is already checked out from the event.

**`Remarks`**

The function performs the following checks and operations:
1. Verifies the existence of the current user, event, and attendee.
2. Checks if the current user is authorized to perform the check-out operation.
3. Checks if the user is an event attendee.
4. Checks if the attendee is checkedIn and if the attendee is already checked out.

#### Defined in

[src/resolvers/Mutation/checkOut.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Mutation/checkOut.ts#L52)
