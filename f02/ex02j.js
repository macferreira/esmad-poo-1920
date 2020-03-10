showFriends('Maria', 'Silva');
showFriends('Maria', 'Silva', 'Inês');
showFriends('Maria', 'Silva', 'Joana', 'Rute', 'Inês');

function showFriends(firstName, lastName, ...friends) {
    alert(`A ${firstName} ${lastName} tem ${friends.length} amigas!`);
}
