struct sum {
	void *left;
	void *right;
	boolean isRight;
};
typedef struct sum sum;

sum *sum_left(void *l) {
	sum *s = malloc(sizeof(sum));
	
	if(s == NULL) {
		//TODO Error
		return NULL;
	} else {
		s->left = l;
		s->right = NULL;
		s->isRight = false;
		return s;
	}
}

sum *sum right(void *r) {
	sum *s = malloc(sizeof(sum));
	
	if(s == NULL) {
		//TODO Error
		return NULL;
	} else {
		s->left = NULL;
		s->right = r;
		s->isRight = true;
		return s;
	}
}

bool sum_isRight(sum *s) {
	return s->isRight;
}

void sum_free(sum *s) {
	if(s != NULL) {
		free(s->left);
		free(s->right);
		free(s);
	}
}